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
Ext.application({
    
    // --------------------------------------
    // Properties
    // --------------------------------------
    name: 'HelloWorldApplication',
    
    
    // --------------------------------------
    // Constructor
    // --------------------------------------
    launch: function() {
        
        //  SETUP CLASS PATHS -
        //      Now "com.blah.foo" anywhere finds files at "app.com.blah.foo" etc...
        Ext.Loader.setConfig({
                enabled	: true,
                paths	: {
                    com	: "src/com"
                }
        });
        
        
        this.testSomeUI();
        
        this.testSomeObjects();
        
    },
    
    // --------------------------------------
    // Methods
    // --------------------------------------
    testSomeUI: function() {
        
        Ext.create('Ext.container.Viewport', {
            name : "viewPort2",
            layout: 'fit',
            items: [
                {
                    title: 'My Viewport',
                    html : 'Hello World!'
                }
            ]
        });
    
    },
    
    testSomeObjects: function() {
        
        // SUPER CLASS
        var myBeer = Ext.create('com.rmc.projects.helloworld.Beer', 'Budweiser');       
        console.log ("myBeer.brandName: " + myBeer.brandName );
        console.log (myBeer.drink());
        
        // CHILD CLASS
        var myLightBeer = Ext.create('com.rmc.projects.helloworld.LightBeer', 'BudLight');       
        console.log ("myLightBeer.brandName: " +myLightBeer.brandName );
        console.log (myLightBeer.drink());
        
        // MIXIN
        //  Because of 'MixinCheers.js' we can call 'cheers()'
        myLightBeer.cheers();
    
    }
    
});
