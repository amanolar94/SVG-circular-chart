# Simple Circular Chart

This is a circular chart that is implemented completely with SVG.
It consists of:

- The main bar
- The amount that is completed in the middle of the circle either on absolute number or in % percentage
- A label bellow the percentage

# Props Available

- width (**REQUIRED**)(type: integer) (e.g: width={200})
- amountFilled (**REQUIRED**)(type: integer) (e.g:
  amountFilled={50})
- amountFilledDisplay (**DEFAULT: false**)(type: boolean) (e.g:
  amountFilledDisplay={true})
- displayInPercentage (**DEFAULT: false**)(type: boolean) (e.g:
  displayInPercentage={false})
- base (**DEFAULT: 100**)(type: integer) (e.g: base={100})
- MainLineWidth (**OPTIONAL**)(type: integer) (e.g: MainLineWidth=
  {6})
- color (**DEFAULT BLACK**)(type: any color value compatible to html5) (e.g: color={"#ff001f"})
- BackgroundLineWidth (**DEFAULT: equal to MainLineWidth**)(type: integer) (e.g: BackgroundLineWidth={6})
- backgroundColor (**DEFAULT TRANSPARENT**)(type: any color value compatible to html5) (e.g: color={"#ff001f"})
- numberColor (**OPTIONAL**)(type: any color value compatible to html5) (e.g: numberColor={"#000"})
- labelText (**OPTIONAL**)(type: sring) (e.g labelText={"TOTAL"})
- labelColor (**OPTIONAL**)(type: any color value compatible to html5) (e.g: labelColor={"#000"})
- roundedEdge (**DEFAULT FALSE**)(type: boolean) (e.g: roundedEdge=
  {true})

**Example Usage:**

```
import CircleChart from "<your path>/CircleChart"" //Add your Circular chart component in your components folder and import it
.
.
.
.
<CircleChart
    width={250}
    amountFilled={82}
    amountFilledDisplay={true}
    displayInPercentage={true}
    base={200}
    MainLineWidth={6}
    BackgroundLineWidth={6}
    numberColor={"#000"}
    labelText={"TOTAL"}
    color={"#ff001f"}
    labelColor={"#666"}
    backgroundColor={"#eee"}
    roundedEdge={true}
/>

```
![Demo Image](https://github.com/amanolar94/SVG-circular-chart/blob/master/demoImage/Capture.PNG)

The component is inspired by [this article in Medium](https://medium.com/@pppped/how-to-code-a-responsive-circular-percentage-chart-with-svg-and-css-3632f8cd7705)
