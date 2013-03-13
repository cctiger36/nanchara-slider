Nanchara slider plugin
=================

A simple jQuery plugin to create text and image slider. Compatible with jqMobi and Zepto.

Example
---------------------

### HTML Snippet ######

    <div id="slide_bar">
        <div class="ns_content">Text 1</div>
        <div class="ns_content">Text 2</div>
        <div class="ns_content">Text 3</div>
    </div>

### Javascript ######

    $("#slide_bar").nancharaSlider();

Options
---------------------

<table>
  <tr>
    <th>Option</th><th>Description</th><th>Default</th>
  </tr>
  <tr>
    <td>accel</td><td>Acceleration of the slide animation</td><td>1</td>
  </tr>
  <tr>
    <td>remainTime</td><td>Millisecond to stop the frame at center</td><td>2000</td>
  </tr>
  <tr>
    <td>nextTime</td><td>Millisecond to move the slider to next frame</td><td>400</td>
  </tr>
</table>

Demo
---------------------
[Live demo here](http://jsfiddle.net/cctiger36/wQuup/)
