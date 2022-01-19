import { clear } from "console";
import React from "react";

export default class LotteryItem extends React.Component<
    LotteryItemProps,
    LotteryItemState
> {
    timer?: NodeJS.Timeout;

    constructor(props: LotteryItemProps) {
        super(props);
        this.state = {
            number: "?",
            decryptingDone: "",
        };
    }

    decryptEffect() {
        this.setState({ decryptingDone: "" });
        let time = 10
        let total = 10
        const temp = () => setTimeout(() => {
            if (total <= 4500) {
                total += time
                time += 10
                this.randomNumber();
                temp()
            }
        }, time);
        temp()
        setTimeout(() => {
            this.setState({
                decryptingDone: "done",
                number: this.props.number,
            });

            this.timer && clearInterval(this.timer);
        }, 5000);
    }

    randomNumber() {
        this.setState({ number: Math.round(Math.random() * 8) + 1 });
    }

    componentDidUpdate(nextProps: LotteryItemProps) {
        const { decrypting } = this.props;
        if (nextProps.decrypting !== decrypting) {
            if (decrypting) {
                this.decryptEffect();
            }
        }
    }

    render() {
        return (
            <div
                className={`ball ${this.props.color} ${this.state.decryptingDone}`}
            >
                {this.state.number}
            </div>
        );
    }
}
