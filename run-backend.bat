@echo off
cd /d "%~dp0\backend"
call .venv\Scripts\activate.bat
python start.py
