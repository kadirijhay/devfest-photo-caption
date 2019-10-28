import React from "react"

class CountdownTimer extends React.Component {
    state = {
        eventDate: new Date("November 16, 2019, 09:00"),
        currentDate: new Date(),
        daysLeft: "",
        hoursLeft: "",
        minutesLeft: "",
        secondsLeft: ""
    }

    componentDidMount() {
        setInterval(() => {
            const eventDate = new Date("November 16, 2019, 09:00").getTime()
            const currentDate = new Date().getTime()
            const countdown = eventDate - currentDate
    
            const calcDaysLeft = Math.floor(countdown / (1000 * 60 * 60 * 24))
            const calcHoursLeft = Math.floor((countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            const calcMinsLeft = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60))
            const calcSecsLeft = Math.floor((countdown % (1000 * 60)) / (1000))
    
            this.setState({
                daysLeft: calcDaysLeft,
                hoursLeft: calcHoursLeft,
                minutesLeft: calcMinsLeft,
                secondsLeft: calcSecsLeft
            })
        }, 1000)
    }

    render() {
        let eventStatus

        if(this.state.currentDate >= this.state.eventDate) {
            if(this.state.currentDate >= this.state.eventDate && this.state.currentDate <= new Date("November 16, 2019, 17:00")) {
                eventStatus = "Event in Progress..."
            } else if (this.state.currentDate > new Date("November 16, 2019, 17:00")) {
                eventStatus = "Event has ended"
            }
        }

        return (
            <div className="col-md-auto countdown">
                <h2 style={{
                        display: this.state.currentDate >= this.state.eventDate &&
                        "none"}}>
                    <span style={{
                        display: this.state.daysLeft === 0 &&
                        "none"
                    }}>
                        <span className="red">{this.state.daysLeft}</span>D :
                    </span>

                    <span style={{
                        display: this.state.daysLeft === 0 &&
                        this.state.hoursLeft === 0 &&
                        "none"
                    }}>
                        <span className="red"> {this.state.hoursLeft}</span>H :
                    </span>

                    <span style={{
                        display: this.state.daysLeft === 0 &&
                        this.state.hoursLeft === 0 &&
                        this.state.minutesLeft === 0 &&
                        "none"
                    }}>
                        <span className="red"> {this.state.minutesLeft}</span>M :
                    </span>

                    <span style={{
                        display: this.state.daysLeft === 0 &&
                        this.state.minutesLeft === 0 &&
                        this.state.secondsLeft === 0 &&
                        "none"
                    }}>
                        <span className="red"> {this.state.secondsLeft}</span>S
                    </span>

                    <span> to go</span>
                </h2>

                <h2>{eventStatus}</h2>
            </div>
        )
    }
}

export default CountdownTimer