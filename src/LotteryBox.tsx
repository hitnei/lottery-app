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
    firstReward: []
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

    randomize3th = () => {
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

    // randomize = (thirdReward = false) => {
    //     let { list } = this.state
    //     if (thirdReward) {
    //         list = [...list, ...thirdRewardsAdd]
    //         this.setState({ list: [...list] });
    //     } else {
    //         list = list.filter((l: number) => {
    //             if (thirdRewardsAdd.includes(l)) {
    //                 return 0;
    //             }
    //             return 1;
    //         })
    //         this.setState({ list: [...list] });
    //     }

    //     const reward = this.randomReward(false, list);

    //     const arrayReward = `${reward}`.split('')

    //     const number = this.state.number
    //     number[this.state.current] = arrayReward[this.state.current]

    //     // const numberCopy = numbers.map((x) => x);

    //     // for (let i = 0; i <= 7; i++) {
    //     //     const random = Math.floor(
    //     //         Math.random() * (numberCopy.length - 1)
    //     //     );
    //     //     this.state.arr.push(numberCopy[random] + 1);
    //     //     numberCopy.splice(random, 1);
    //     // }

    //     this.setState({ number: arrayReward, effect: true });

    //     setTimeout(() => {
    //         this.setState({ effect: false });
    //     }, 8000);
    // };

    render() {
        return (
            <>
                <div id="numbers">
                    <LotteryItem
                        index="0"
                        color="blue"
                        number={this.state.number[0]}
                        decrypting={this.state.number[0]}
                    />
                    <LotteryItem
                        index="1"
                        color="blue"
                        number={this.state.number[1]}
                        decrypting={this.state.number[1]}
                    />
                    <LotteryItem
                        index="2"
                        color="blue"
                        number={this.state.number[2]}
                        decrypting={this.state.number[2]}
                    />
                    <LotteryItem
                        index="3"
                        color="blue"
                        number={this.state.number[3]}
                        decrypting={this.state.number[3]}
                    />
                    <LotteryItem
                        index="4"
                        color="red"
                        number={this.state.number[4]}
                        decrypting={this.state.number[4]}
                    />
                </div>
                <div className="row">
                    <button
                        id="btn"
                        onClick={() => this.randomize2nd()}
                    >
                       Giải Ba
                    </button>
                    <button
                        id="btn"
                        onClick={() => this.randomize3th()}
                    >
                       Giải Nhì
                    </button>
                    <button
                        id="btn"
                        onClick={this.randomize1st}
                    >
                       Giải Nhất
                    </button>
                </div>
                <div>
                    <button
                        id="btn"
                        className='mt-2'
                        onClick={() => this.setState({ number: ['?', '?', '?', '?', '?'], arr: [], current: 0, firstReward: [] })}
                    >
                       Reset
                    </button>
                </div>
            </>
        );
    }
}
