class GameBoard{
    private colorArray: number[];
    private playerInput: number[];
    private score: number;

    constructor(){
        this.colorArray = [];
        this.playerInput = [];
        this.score = 0;
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

    setScore(): void{
        this.score = this.playerInput.length;
    }
    getScore(): number{
        return this.score;
    }
}