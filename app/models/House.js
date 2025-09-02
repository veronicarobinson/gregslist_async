export class House {
    constructor(data) {
        this.id = data.id
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.levels = data.levels
        this.img = data.imgUrl ?? 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        this.year = data.year
        this.price = data.price
        this.description = data.description
        this.creatorId = data.creatorId
        this.creator = data.creator
    }

    get HouseTemplate() {
        return /*html*/ `
        <div class="col-md-6 mb-3">
          <div class="shadow">
            <img class="card-img" src="${this.img}"
              alt="" srcset="">
            <div>
              <div>
                <span>Year: ${this.year}</span>
                <span>House Stories: ${this.levels}</span>
                <span>Bedrooms: ${this.bedrooms}</span>
                <span>Bathrooms: ${this.bathrooms}</span>
              </div>
              <p>${this.description}</p>
            </div>
            <div class="text-success">${this.price}</div>
          </div>

        </div>
        `
    }
}