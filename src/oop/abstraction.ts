//implementing abstraction using interfaces in TypeScript

interface MediaPlayer {
    play(): void;
    pause(): void;
    stop(): void;
}

class MusicPlayer implements MediaPlayer {
    play(): void {
        console.log("Playing music...");
    }
    pause(): void {
        console.log("Pausing music...");
    }
    stop(): void {
        console.log("Stopping music...");
    }
}


const myPlayer = new MusicPlayer();
myPlayer.play(); // Output: Playing music...
myPlayer.pause(); // Output: Pausing music...
myPlayer.stop(); // Output: Stopping music...

//abstract class example

abstract class Vehicle {
    abstract startEngine(): void;
    abstract stopEngine(): void;
}

class Car extends Vehicle {
    startEngine(): void {
        console.log("Car engine started.");
    }
    stopEngine(): void {
        console.log("Car engine stopped.");
    }
}

const myCar = new Car();
myCar.startEngine(); // Output: Car engine started.
myCar.stopEngine(); // Output: Car engine stopped.