export class PetShopController {
  
  constructor() {

    this.list = [];
  }
  addItem(item) {
    this.list.push(item);
  }
  delete(index) {
    this.list.splice(index,1);
  }
  getList(){
    fetch('http://localhost:3000/pets')
    .then(response => response.json())
    .then(data => {sessionStorage.setItem('allPets',JSON.stringify(data))});
  }
}