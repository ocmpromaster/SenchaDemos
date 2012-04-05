<!--
/**
 * Copyright (C) 2005-2012 by Rivello Multimedia Consulting (RMC).                    
 * code [at] RivelloMultimediaConsulting [dot] com                                                  
 *                                                                      
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the      
 * "Software"), to deal in the Software without restriction, including  
 * without limitation the rights to use, copy, modify, merge, publish,  
 * distribute, sublicense, and#or sell copies of the Software, and to   
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:                                            
 *                                                                      
 * The above copyright notice and this permission notice shall be       
 * included in all copies or substantial portions of the Software.      
 *                                                                      
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,      
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF   
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR    
 * OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.                                      
 */
//Marks the right margin of code *******************************************************************
-->

// --------------------------------------
// Classpaths
//      Now any code that references "com.blah.foo" will look 
//      at the physical location "src.com.blah.foo"
// --------------------------------------
Ext.Loader.setConfig({
        enabled	: true,
        paths	: {
            com	: "src/com"
        }
});


// --------------------------------------
// Main Application
// --------------------------------------
Ext.application ({
        
        // --------------------------------------
        // Properties
        // --------------------------------------
        name: 'ExtJSMVCTemplate',
        autoCreateViewport : false,

        //AFTER 'LAUNCH' THE CODE IN THE CONTROLLER IS FIRED
        //THE UI AND OTHER IMPORTANT THINGS HAPPEN WITHIN THE FOLLOWING CLASS
        //SIMPLY SETTING THIS PROPERY HERE WIRES-UP AND RUNS THE CONTROLLER
        controllers: [
                'com.rmc.projects.extjsmvctemplate.controller.MainController'
        ],
        

        // --------------------------------------
        // Properties
        // --------------------------------------
        launch: function()
        {
                
                //TRACE
                console.log ("ExtJSMVCTemplate.launch()");
                
                //SHOW DIALOG BOX (OPTIONAL)
                //Ext.MessageBox.alert('Ext JS MVC Template','Close this MessageBox and click "Load Message" or "Clear Message". That is it!');
                   
                //NEXT?
                //See the MainController.js code from above

                
        }
});


