class GameBoard{
    private colorArray: number[];
    private playerInput: number[];

    constructor(){
        this.colorArray = [];
        this.playerInput = [];
    }

    setPlayerInput(playerClick: number): void{
        this.playerInput.push(playerClick);
    }

    getRandomColor(): number{
        const randomColor = Math.floor(Math.random() * 4);
        return randomColor;
    }

    playSequence(): void{
        this.colorArray.push(this.getRandomColor());
        for(const nr of this.colorArray){
            //Code to flash the box specified in nr
        }
    }

    checkIfCorrect(): boolean{
        return this.colorArray.every((nr, index) => nr === this.playerInput[index]);
    }
}