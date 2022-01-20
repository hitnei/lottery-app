interface LotteryBoxProps {}

interface LotteryBoxState {
    number: FixedLengthArray<number, 7>;
    current: number;
    arr: array;
    firstReward: array;
    resetAnimation: boolean;
    listSelected: array;
}

interface LotteryItemProps {
    index: string;
    number: number;
    decrypting: boolean;
    color: string;
    resetAnimation: boolean;
}

interface LotteryItemState {
    decryptingDone: string;
    number: number | string;
}
