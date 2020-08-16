
class Ground {
    constructor(number) {
      this.number = number;
      this.hasCreatedSequal = false;
      this.y = window.innerHeight;
      this.start
    }
    
    //Ground Game Loop
   loop() {
       requestAnimationFrame((timestamp, )=>{
        this.updateGroundPosition(timestamp);
        this.render()
        this.checkIfInScreen()
        if(this.isActive) {
          this.loop()
        }
       })
   }
   
    //Update
    updateGroundPosition(timestamp) {
      if(this.start == undefined) {
        this.start = timestamp
      }
      this.elapsed = timestamp - this.start
      console.log(`Time elapsed: ${this.elapsed} instance: ${this.number}`)


        if (this.checkIfOverScreen() == false) {
            this.y = (window.innerHeight - ((0,1 / 10) * this.elapsed));
            console.log(`Instance: ${this.number} y: ${this.y}`)
        } else if(this.isActive) {
          document.querySelector(`.ground${this.number}`).remove()
          this.isActive = false;
        }
    }

    //Render
    render() {
      if(this.isActive == true) {
      document.querySelector(`.ground${this.number}`).style.top = this.y + "px";
    }
  }


    createGround() {
      let newDiv = document.createElement("div");
      newDiv.classList.add("ground");
      setTimeout(() => {
        newDiv.classList.add("ground" + this.number);
        const getBody = document.getElementsByTagName("body")[0];
        setTimeout(() => {
          getBody.appendChild(newDiv);
          this.y = window.innerHeight;
          setTimeout(() => {
            if(!this.isActive) {
              this.isActive = true;
              this.loop();
            } 
          }, 1);
        }, 1);  
      }, 1);
    }
  
    
  
    checkIfOverScreen() {
      if (this.y < 0 - window.innerHeight) {
        return true;
      } else {
        return false;
      }
    }

    checkIfInScreen() {
      
      if (this.y < 20 && this.hasCreatedSequal == false) {
        newGroundInstance()
        this.hasCreatedSequal = true;
      }  else {
        return false;
      }
    }
  
    
  }
  
let i = 0
const newGroundInstance = () => {
    i++;
    let ground = new Ground(i);
    ground.createGround();
};
newGroundInstance();


  