import React, { Component } from 'react'
import Labels from './Labels'
import ShowClock from './ShowClock'

// Container component that holds the Clock logic.

class Clock extends Component {

  state = {
    clock: { minutes: 25, seconds: 0 },
    workTime: 25,
    chillTime: 5,
    workOffset: 0,
    chillOffset: 0,
    interval: null,
    remainingTime: null,
    pause: false,
    chilling: false,
    playButtonClicked: false,
    resetButtonClicked: false
  }

  startTimer = () => {

    // NOTE: interval and pause must be checked on each iteration of
    // the interval, so they can't be destructured here.

    const {
      remainingTime,
      workTime,
      chillTime,
      chilling
    } = this.state

    let endTime

    // endTime is assigned different values depending on the component's state.

    if (this.state.pause) {
      endTime = new Date().getTime() + remainingTime
      endTime = new Date(endTime)
      this.setState({
        pause: false
      })
    }
    else if (chilling) {
      endTime = new Date().getTime() + (chillTime * 60 * 1000)
      endTime = new Date(endTime)
    }
    else {
      endTime = new Date().getTime() + (workTime * 60 * 1000)
      endTime = new Date(endTime)
    }

    // getRemainingTime calculates the time difference between
    // the specified endTime and a new Date object created every second.

    const getRemainingTime = endTime => {
      let totalTime = Date.parse(endTime) - Date.parse(new Date())
      let seconds = Math.floor((totalTime / 1000) % 60)
      let minutes = Math.floor((totalTime / 1000 / 60) % 60)

      return { totalTime, seconds, minutes }
    }

    const initializeClock = endTime => {

      const updateClock = () => {
        let time = getRemainingTime(endTime)

        // The offset allows the user to modify the timer length
        // while the timer is running.

        chilling ? time.minutes += this.state.chillOffset : time.minutes += this.state.workOffset

        if (this.state.pause) {
          clearInterval(this.state.interval)
        }
        else {
          this.updateRemainingTime(time) // The job of updating the display is delegated to updateRemainingTime.
        }

        if (time.totalTime <= 0) {

          // Clear the interval when the timer reaches zero.

          clearInterval(this.state.interval)

          // Play the sound alert.

          this.beep.play()

          // Let 1 second pass before the next timer starts.

          setTimeout(this.startTimer, 1000)

          // Update the state to display "Break" or "Session"

          this.setState({
            chilling: !chilling
          })
        }
      }

      // Call updateClock once before the interval starts
      // to avoid a 1 second delay.

      updateClock()

      this.setState({
        interval: setInterval(updateClock, 1000)
      })
    }
    initializeClock(endTime)

    // If chilling, reverse the direction of the circle animation.

    const animatedCircle = document.getElementById('animated-circle')
    if (animatedCircle) {
      this.state.chilling
        ? animatedCircle.style.animationDirection = 'reverse'
        : animatedCircle.style.animationDirection = 'normal'
    }
  }

  // if pause is true, the timer begins counting from the remainingTime
  // saved in state.

  pauseTimer = () => {
    clearInterval(this.state.interval)
    this.setState({
      pause: true
    })
  }

  updateRemainingTime = time => {

    this.setState({
      clock: { minutes: time.minutes, seconds: time.seconds },
      remainingTime: time.totalTime
    })
  }

  updateWorkTime = event => {

    const {
      workTime,
      workOffset,
      remainingTime,
      clock
    } = this.state

    if (event.currentTarget.id === 'work-plus' && workTime < 60) {

      this.setState({
        workTime: workTime + 1,
        workOffset: remainingTime ? workOffset + 1 : workOffset,
        clock: { minutes: clock.minutes += 1, seconds: clock.seconds }
      })
    }

    else if (event.currentTarget.id === 'work-minus' && workTime > 1) {

      this.setState({
        workTime: workTime - 1,
        workOffset: remainingTime ? workOffset - 1 : workOffset,
        clock: { minutes: clock.minutes -= 1, seconds: clock.seconds }
      })
    }
  }

  updateChillTime = event => {

    const {
      chillTime,
      chillOffset,
      remainingTime,
      chilling,
      clock
    } = this.state

    if (event.currentTarget.id === 'chill-plus' && chillTime < 60) {
      this.setState({
        chillTime: chillTime + 1,
        chillOffset: remainingTime ? chillOffset + 1 : chillOffset,
        clock: chilling
          ? { minutes: clock.minutes += 1, seconds: clock.seconds }
          : clock
      })
    }

    else if (event.currentTarget.id === 'chill-minus' && chillTime > 1) {

      this.setState({
        chillTime: chillTime - 1,
        chillOffset: remainingTime ? chillOffset - 1 : chillOffset,
        clock: chilling
          ? { minutes: clock.minutes -= 1, seconds: clock.seconds }
          : clock
      })
    }
  }

  handleReset = () => {

    // Stop the timer.

    clearInterval(this.state.interval)

    // Stop and reset the beep.

    this.beep.pause()
    this.beep.currentTime = 0

    // Revert the state to how it was at the start.

    this.setState({
      clock: { minutes: 25, seconds: 0 },
      workTime: 25,
      chillTime: 5,
      workOffset: 0,
      chillOffset: 0,
      interval: null,
      remainingTime: null,
      pause: false,
      chilling: false,
      playButtonClicked: false,
      resetButtonClicked: true
    })

    setTimeout(() => this.setState({ resetButtonClicked: false}), 1000)
  }

  // The play and pause is controlled by one button, so whether
  // it has been clicked or not must be tracked in state.

  handlePlayPause = () => {
    const { playButtonClicked } = this.state
    const animatedCircle = document.getElementById('animated-circle')

    if (playButtonClicked) {
      this.pauseTimer()
      if (animatedCircle) animatedCircle.style.animationPlayState = 'paused'
    }
    else {
      this.startTimer()
      if (animatedCircle) animatedCircle.style.animationPlayState = 'running'
    }

    this.setState({
      playButtonClicked: !playButtonClicked
    })
  }

  render() {
    const {
      chillTime,
      workTime,
      chilling,
      clock,
      remainingTime,
      pause,
      resetButtonClicked
    } = this.state

    const clockString = `${('0' + clock.minutes).slice(-2)}:${('0' + clock.seconds).slice(-2)}`

    return (
      <>
        <Labels
          chillTime={chillTime}
          workTime={workTime}
          updateChillTime={this.updateChillTime}
          updateWorkTime={this.updateWorkTime}
        />
        <ShowClock
          handlePlayPause={this.handlePlayPause}
          handleReset={this.handleReset}
          chilling={chilling}
          clock={clockString}
          remainingTime={remainingTime}
          pause={pause}
          resetButtonClicked={resetButtonClicked}
        />

        <audio
          id="beep" preload="auto"
          src="https://s3.us-east-2.amazonaws.com/pomodoro-clock-sound/solemn.mp3"
          ref={audio => { this.beep = audio }} />
      </>
    )
  }
}

export default Clock
