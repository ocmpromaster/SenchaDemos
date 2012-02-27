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
Ext.define('com.rmc.projects.extjstemplate.view.ui.MainViewUI', {
    
    // --------------------------------------
    // Properties
    // --------------------------------------
    extend: 'Ext.container.Viewport',

    layout: {
        type: 'fit'
    },

    // --------------------------------------
    // Constructor
    // --------------------------------------
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    layout: {
                        align: 'stretch',
                        type: 'vbox'
                    },
                    title: 'ExtJS Template',
                    items: [
                        {
                            xtype: 'textareafield',
                            maintainFlex: true,
                            id: 'bodyText',
                            emptyText: '',  //shown when 'value' is ""
                            html : "",
                            flex: 1,
                            listeners: {
                                render: function() {
                                    //FIRES ONE TIME
                                    //Ext.MessageBox.alert(this.id + ' was rendered.');
                                }
                            }
                        },
                        {
                            xtype: 'button',
                            id : 'loadMessageButton',
                            height: 110,
                            width: 502,
                            text: 'Load Message',
                            listeners: {
                                click : me.onLoadMessageButtonClick
                            }
    
                        },
                        {
                            xtype: 'button',
                            id : 'clearMessageButton',
                            disabled: true,
                            height: 110,
                            width: 502,
                            text: 'Clear Message',
                            listeners: {
                                click : me.onClearMessageButtonClick
                            }
                            
                        }
                    ]
                }
            ]
        });
        

        me.callParent(arguments);

    },
    
    // --------------------------------------
    // Methods
    // --------------------------------------
    
    
    
    // --------------------------------------
    // Event Handlers
    // --------------------------------------
    onLoadMessageButtonClick: function() {
        
        //TRACE
        console.log ("MainViewUI.onLoadMessageButtonClick()");
        
        //LOOKUP
        //TWO WAYS TO QUERY (by 'id')
        //1
        //var bodyText            = Ext.ComponentQuery.query('#bodyText')[0] 
        //2
        var bodyText            = Ext.ComponentManager.get('bodyText');
        var clearMessageButton  = Ext.ComponentManager.get('clearMessageButton');
        var loadMessageButton   = Ext.ComponentManager.get('loadMessageButton');
        
        
        //DISABLE THIS BUTTON
        loadMessageButton.setDisabled(true);
        
        //ENABLE CLEAR BUTTON
        clearMessageButton.setDisabled(false);
        
        //SET MESSAGE VALUE
        bodyText.setValue ("Hello World!");
    },
    
    
    onClearMessageButtonClick: function() {
        
        //TRACE
        console.log ("MainViewUI.onClearMessageButtonClick()");
        
        //LOOKUP
        var bodyText            = Ext.ComponentManager.get('bodyText');
        var clearMessageButton  = Ext.ComponentManager.get('clearMessageButton');
        var loadMessageButton   = Ext.ComponentManager.get('loadMessageButton');
        
        //SET MESSAGE VALUE
        bodyText.setValue ("");
        
        //DISABLE THIS BUTTON
        clearMessageButton.setDisabled(true);
        
        //ENABLE CLEAR BUTTON
        loadMessageButton.setDisabled (false);
    }
});