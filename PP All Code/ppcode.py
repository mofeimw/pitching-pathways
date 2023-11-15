#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Wed Nov 15 11:10:28 2023

@author: lhyarkosky
"""
#Sync with Database
import gspread
from oauth2client.service_account import ServiceAccountCredentials



SCOPES = [
    "https://www.googleapis.com/auth/spreadsheets",
    "https://www.googleapis.com/auth/drive",
    "https://www.googleapis.com/auth/drive.file",
]


CREDS= ServiceAccountCredentials.from_json_keyfile_name('keys.json', SCOPES)

client= gspread.authorize(CREDS)

sheet= client.open('User_Data').sheet1

#%%
#return data

#def get_all_records():
    #all_recs= sheet.get_all_records()
    #print(all_recs)
    
#get_all_records()

#%%
#finds next available row for custumer add
def next_available_row(sheet):
    str_list = list(filter(None, sheet.col_values(1)))
    return str(len(str_list)+1)

#global var for next row, can be used for addition of items or increase storage space later on
next_row = str(next_available_row(sheet))

    #adds custumer, if no current positions fills with 
def add_custumer(Email, Password, First_Name, Last_Name, Current_Positions=''):
    next_available_row(sheet)
    sheet.update('A'+next_row, [[Email,Password,First_Name,Last_Name,Current_Positions]])

#Example Usage of add_custumer
add_custumer('Lhyarkosky@gmail.com', '10109838', 'Lars', 'Yarkosky', 'adefasdfv')





#SPREAD_SHEET_ID= '108-6FyUYD0O6SiRWb6taE5DWxfnRaPYoExtvL086Hw4'
