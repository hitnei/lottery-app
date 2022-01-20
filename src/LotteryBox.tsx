import React from "react";
import LotteryItem from "./LotteryItem";

// const numbers = [...Array(9).keys()];

const firstRewards = [
    54900,
    54901,
    54902,
    54903,
    54904,
    54905,
    54906,
    54907,
    54908,
    54909,
]

const list = [
    54910,
    54911,
    54912,
    54913,
    54914,
    54915,

    54501,
    54502,
    54503,
    54504,
    54505,
    54506,

    54510,
    54511,
    54512,
    54513,
]

const thirdRewardsAdd = [
    54514,
    54515,
    54516,
]

const defaultState = {
    number: ['?', '?', '?', '?', '?'],
    effect: false,
    current: 0,
    arr: [],
    list: list,
    firstReward: [],
    resetAnimation: false,
}

export default class LotteryBox extends React.Component<LotteryBoxProps, LotteryBoxState> {
    constructor(props: LotteryBoxProps) {
        super(props);
        this.state = defaultState;
    }

    randomReward = (is1stReward?: boolean, listInput?: number[]) => {
        let list = listInput || this.state.list
        if (is1stReward) {
            list = firstRewards
        }
        const result = Math.floor(
            Math.random() * list.length
        )
        const resultReward = list.splice(result, 1)[0]

        this.setState({ ...this.state, list: list})

        return resultReward;
    }

    randomize1st = () => {
        let arrayReward = this.state.firstReward
        if (!arrayReward.length) {
            const reward = this.randomReward(true)
            arrayReward = `${reward}`.split('')
            this.setState({ firstReward: [...arrayReward] })
        }

        const number = this.state.number
        number[this.state.current] = arrayReward[this.state.current]

        this.setState({
            number: [...number],
            current: this.state.current + 1,
        });
    };

    randomize2nd = () => {
        let arrayReward = this.state.firstReward
        if (!arrayReward.length) {
            const reward = this.randomReward(false)
            arrayReward = `${reward}`.split('')
            this.setState({ firstReward: [...arrayReward] })
        }

        const number = this.state.number
        number[this.state.current] = arrayReward[this.state.current]

        this.setState({
            number: [...number],
            current: this.state.current + 1,
        });
    };

    randomize3th = () => {
        let arrayReward = this.state.firstReward
        if (!arrayReward.length) {
            const reward = this.randomReward(false, [...this.state.list, ...thirdRewardsAdd])
            arrayReward = `${reward}`.split('')
            this.setState({ firstReward: [...arrayReward] })
        }

        const number = this.state.number
        number[this.state.current] = arrayReward[this.state.current]

        this.setState({
            number: [...number],
            current: this.state.current + 1,
        });
    };

    reset = () => {
        this.setState({ number: ['?', '?', '?', '?', '?'], arr: [], current: 0, firstReward: [], resetAnimation: true })
        setTimeout(() => {
            this.setState({ resetAnimation: false })
        }, 1000);
    }

    render() {
        return (
            <>
                <div id="numbers">
                    <LotteryItem
                        resetAnimation={this.state.resetAnimation}
                        index="0"
                        color="yellow"
                        number={this.state.number[0]}
                        decrypting={this.state.number[0]}
                    />
                    <LotteryItem
                        resetAnimation={this.state.resetAnimation}
                        index="1"
                        color="yellow"
                        number={this.state.number[1]}
                        decrypting={this.state.number[1]}
                    />
                    <LotteryItem
                        resetAnimation={this.state.resetAnimation}
                        index="2"
                        color="yellow"
                        number={this.state.number[2]}
                        decrypting={this.state.number[2]}
                    />
                    <LotteryItem
                        resetAnimation={this.state.resetAnimation}
                        index="3"
                        color="yellow"
                        number={this.state.number[3]}
                        decrypting={this.state.number[3]}
                    />
                    <LotteryItem
                        resetAnimation={this.state.resetAnimation}
                        index="4"
                        color="red"
                        number={this.state.number[4]}
                        decrypting={this.state.number[4]}
                    />
                </div>
                <div className="row">
                    <button
                        id="btn"
                        onClick={() => this.randomize3th()}
                    >
                       Giải Ba
                    </button>
                    <button
                        id="btn"
                        onClick={() => this.randomize2nd()}
                    >
                       Giải Nhì
                    </button>
                    <button
                        id="btn"
                        onClick={this.randomize1st}
                    >
                       Giải Nhất
                    </button>
                    <i
                        className={`fas fa-sync-alt reset ${this.state.resetAnimation && 'resetAnimation'}`}
                        onClick={this.reset}
                    ></i>
                </div>
            </>
        );
    }
}
