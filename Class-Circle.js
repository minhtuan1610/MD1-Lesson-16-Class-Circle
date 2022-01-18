class Circle {
    constructor(radius, color) {
        this.radius = radius;
        this.mausac = color;
    }

    Circle() {

    }

    getRadius() {
        return this.radius;
    }

    getArea() {
        let S = this.radius * this.radius * Math.PI;
        return S;
    }

    //Ham co lien quan den Class
    drawCircle() {
        let context = document.getElementById("myCanvas").getContext("2d");
        context.beginPath();
        context.arc(250, 250, this.radius, 0, 2 * Math.PI);
        context.fill();
    }
}

let circle1 = new Circle(30, "pink");
let areaCircle1 = circle1.getArea();
let radiusCircle1 = circle1.getRadius();
let circle2 = new Circle(50,);
circle2.drawCircle();
circle1.drawCircle();
//Ham khong lien quan den Class
// function drawCircle1(x, y, r) {
//     let context = document.getElementById("myCanvas").getContext("2d");
//     context.beginPath();
//     context.arc(x, y, r, 0, 2 * Math.PI);
//     context.fill();
// }
//
alert("Radius = " + radiusCircle1 + " Area = " + areaCircle1);
// drawCircle1(250, 250, circle1.radius);
