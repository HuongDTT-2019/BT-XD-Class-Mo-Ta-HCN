function Rectangle(width, height) {
    this.width = width;
    this.height = height;
    this.getWidth = function () {
        return this.width;
    };
    this.getHeight = function () {
        return this.height;
    };
    this.setWidth=function (width) {
        this.width=width;
    };
    this.setHeight=function (height) {
        this.height=height;
    }
}

Rectangle.prototype.Area = function () {
    this.area = this.width * this.height;
    return this.area;
};
Rectangle.prototype.Perimeter = function () {
    this.perimeter = (this.width + this.height) * 2;
    return this.perimeter;
};
let rectangle = new Rectangle(100, 50);
let width1 = rectangle.getWidth();
let height1 = rectangle.getHeight();
rectangle.setWidth(50);
rectangle.setHeight(30);
let area1 = rectangle.Area();
let per1 = rectangle.Perimeter();
document.getElementById('result_area_perimeter').innerHTML="Area: "+area1+"</br>"+"Perimeter: "+per1;
function creatRectangle() {
    let ctx = document.getElementById("myCanvas").getContext('2d');
    ctx.rect(50, 50,width1,height1);
    ctx.fill();
}
creatRectangle();