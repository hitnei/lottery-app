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

    59410,
    59411,
    59412,
    59413,
]

const thirdRewardsAdd = [
    59414,
    59415,
    59416,
]

const defaultState = {
    number: ['?', '?', '?', '?', '?'],
    current: 0,
    arr: [],
    firstReward: [],
    resetAnimation: false,
    listSelected: []
}

export default class LotteryBox extends React.Component<LotteryBoxProps, LotteryBoxState> {
    constructor(props: LotteryBoxProps) {
        super(props);
        this.state = defaultState;
    }

    randomReward = (list: number[]) => {
        const { listSelected } = this.state
        list = list.filter(l => !listSelected.includes(l))
        console.log("🚀 ~ file: LotteryBox.tsx ~ line 64 ~ LotteryBox ~ list", list)
        const result = Math.floor(
            Math.random() * list.length
        )
        const resultReward = list[result]

        this.setState({ listSelected: [...listSelected, resultReward]})

        return resultReward;
    }

    randomize = (list: number[]) => {
        let arrayReward = this.state.firstReward
        if (!arrayReward.length) {
            const reward = this.randomReward(list)
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
                        onClick={() => this.randomize([...list, ...thirdRewardsAdd, ...firstRewards])}
                    >
                       Giải Ba
                    </button>
                    <button
                        id="btn"
                        onClick={() => this.randomize([...list, ...firstRewards])}
                    >
                       Giải Nhì
                    </button>
                    <button
                        id="btn"
                        onClick={() => this.randomize(firstRewards)}
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
