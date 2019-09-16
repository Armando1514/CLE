# CLE-canned-letters-estimator
### SCOPE

This project was committed by a company named CityVision SRL, the purpose is to estimate the cost for canned letters. As shown in the figure below, the letter's build involves some work processes and different materials that result in more complexity to estimate a cost near reality.

![canned letter A](http://ferrara.link/img/CLE-canned-letters-estimator/cannedLetter.jpg)

The estimator computes  **process costing,** an accounting methodology that traces and accumulates direct costs and allocates indirect costs of a manufacturing process, more in details :

- **Material costs**, based on user selection and letter's size, calculate the cost for each material adopted to create the letters.
-  **Cost of material waste**, based on material costs, add in the calculation the average of material waste.
- **Machine costs and employee costs**, based on user selection and letter's size, it calculates the machine costs and employee costs to create the letters.
- **Business profits,** realized when the amount of revenue gained from a business activity exceeds the expenses, costs, and taxes needed to sustain the activity
- **Fixed cost,** cost that does not change with an increase or decrease in the number of goods or services produced or sold. 

Through this calculation is possible to estimate:



- **Minimum selling threshold,** to understand the minimum price to get revenue from selling.
- **Public price and different sale prices.**

Finally, at the end is possible to **send the report via email**.

### VIDEO PRESENTATION

[![Watch the video](http://ferrara.link/img/cbisdataintegration/videopresentation.jpg)](http://ferrara.link/img/CLE-canned-letters-estimator/estimatorLetters.mp4)



The language of the front-end is Italian (Client's requirement), but is easy to edit.

### Project structure

**formContact.php**, is the script for sending the email, edit the field commented with "/* YOUR EMAIL HERE */", with your email.

**js/estimator-controller.js**, all the logic related to the form's fields.

**js/estimator-costs.js**, the process costing related to each user choice. 

**js/generate-page-costs.js**, the summary at the end of the form, with the estimator calculations to show.

**Add one more step to the wizard**

Each step is defined by a div, so simply duplicate one of them. Below an example of the structure:

```html
<div class="step">
	your content....                
	</div>
<!-- end step-->
```



### **Sources and Credits** 

You can find the more documentation on the  relative sites. 		 	  

- [Twitter Bootstrap](http://twitter.github.io/bootstrap/)
- [Modernirz](https://modernizr.com/)
- [Animate.css](http://daneden.github.io/animate.css/)
- [Jquery](http://jquery.com/)
- [Jquery ui](https://github.com/jquery/jquery-ui)
- [Owl carousel](http://owlgraphic.com/owlcarousel/)
- [Jquery validation](http://jqueryvalidation.org/)
- [jQuery Wizard](https://github.com/kflorence/jquery-wizard/)
- [RangeSlider](https://github.com/andreruffert/rangeslider.js)
- [Jquery Parallax](http://pixelcog.github.io/parallax.js/)
