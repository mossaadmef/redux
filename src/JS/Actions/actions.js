import React from 'react'
import { ADD_TODO } from '../Constants/actions-types';
import { FILTER_TODO } from '../Constants/actions-types';
import { EDIT_TODO } from '../Constants/actions-types';
import { DELETE_TODO } from '../Constants/actions-types';

export const addTask = (id, description) => ({
type : ADD_TODO , payload : {id, description, isDone : false},

});

export const filterTodo = (id) => ({
    type : FILTER_TODO , payload : {id},
    
    });

export const editTodo = (id, description) => ({
        type : EDIT_TODO , payload  : {id, description},
        
        });

export const deleteTodo = (id) => ({
            type : DELETE_TODO , payload : {id},   
            
            });