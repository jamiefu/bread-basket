# Bread Basket
Event platform and talent network geared towards high school and college students searching for opportunities

## Development (with server)
React frontend, Flask backend served through build templates

All shell scripts written from the assumption that you are at root. 

**Note**: Set up designed for *NIX OS AKA I can't help you if you're Windows. 

1. Python3 virtual environment
```sh
virtualenv -p python3 venv
source venv/bin/activate
```

2. Install Python dependencies
```sh
pip install -r requirements.txt
```

3. Install Node dependencies
```sh
cd client
yarn install
```

4. Build React templates
```sh
cd client
yarn build
```

5. Server configuration - rename config.example to config.py and fill in variables accordingly
```sh
cd server
vim config.py
```

6. Run Flask server
```sh
python run.py
```

## Development (frontend only)

All shell scripts written from the assumption that you are at root. 

1. Install Node dependencies
```sh
cd client
yarn install
```

2. Run development server
```sh
yarn start
```