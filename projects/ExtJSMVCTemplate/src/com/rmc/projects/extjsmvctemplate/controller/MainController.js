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
Ext.define('com.rmc.projects.extjsmvctemplate.controller.MainController', {
    
    // --------------------------------------
    // Properties
    // --------------------------------------
    extend: 'Ext.app.Controller',
    
    bodyText : "",
    loadMessageButton : "",
    clearMessageButton : "",
    
    views : [
        'com.rmc.projects.extjsmvctemplate.view.MainView'
    ],

    stores: [
        'com.rmc.projects.extjsmvctemplate.store.MessageStore'
    ],
    

    // --------------------------------------
    // Constructor
    // --------------------------------------
    init: function()
    {
        var me = this;
        
        //DO A LOOKUP ON THE 'viewport', WAIT FOR RENDER
        this.control({
            'viewport': {
                render: me.onViewPortRendered
            }
        });
        
        //CREATE THE UI
        var mainView = Ext.create('com.rmc.projects.extjsmvctemplate.view.MainView', {
            renderTo: Ext.getBody()
        });
        mainView.show();
        

    },
    
    // --------------------------------------
    // Methods
    // --------------------------------------
    
    
    
    // --------------------------------------
    // Event Handlers
    // --------------------------------------
    onViewPortRendered: function()
    {
        
        //SAVE 'MainController' as reference
        var me = this;
        
        //TRACE
        console.log ("MainViewUI.onViewPortRendered() ");
        
        //ONE-TIME-ONLY, STORE REFERENCES TO THE UI
        this.bodyText            = Ext.ComponentManager.get('bodyText');
        this.loadMessageButton   = Ext.ComponentManager.get('loadMessageButton');
        this.clearMessageButton  = Ext.ComponentManager.get('clearMessageButton');
        
        //LISTENERS
        this.loadMessageButton.addListener  ("click", function () { me.onLoadMessageButtonClick() } ) ;
        this.clearMessageButton.addListener ("click", function () { me.onClearMessageButtonClick() } );

    },
    
    onLoadMessageButtonClick: function()
    {
                
        //TRACE
        console.log ("MainViewUI.onLoadMessageButtonClick() ");

        //DISABLE THIS BUTTON
        this.loadMessageButton.setDisabled(true);
        
        //ENABLE CLEAR BUTTON
        this.clearMessageButton.setDisabled(false);
        
        //GET DATA FROM MODEL, THE STORE "WRAPS" THE MODEL        
        var messageStore = this.getStore('com.rmc.projects.extjsmvctemplate.store.MessageStore');
                
        //SET MESSAGE VALUE
        this.bodyText.setValue (messageStore.getMessage());
    },
    
    
    onClearMessageButtonClick: function()
    {
        
        //TRACE
        console.log ("MainViewUI.onClearMessageButtonClick()");

        //SET MESSAGE VALUE
        this.bodyText.setValue ("");
        
        //DISABLE THIS BUTTON
        this.clearMessageButton.setDisabled(true);
        
        //ENABLE CLEAR BUTTON
        this.loadMessageButton.setDisabled (false);
    }
});