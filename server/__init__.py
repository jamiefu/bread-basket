from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy

STATIC_FOLDER = "../client/build/static"
TEMPLATE_FOLDER = "../client/build"
CONFIG_FILE = "./config.py"

def load_models():
    """
    Load all database models and create tables
    """
    from server.models.user import User
    from server.models.event import Event
    from server.models.registration import Registration

    db.create_all()

def load_blueprints():
    """
    Load all blueprints for app
    """


def setup_default_routes():
    """
    Set up default routes for app
    """

    @app.errorhandler(404)
    def default(error):
        return render_template("index.html")

def setup_debug():
    """
    Set up debug settings
    """
    from flask_cors import CORS

    CORS(app, origins=[app.config["FRONTEND_URL"]], supports_credentials=True)

def create_app():
    """
    Creates flask app, setting up database and blueprints
    """
    global app
    global db

    # Set up and configure app
    app = Flask(__name__, static_folder=STATIC_FOLDER, template_folder=TEMPLATE_FOLDER)
    app.config.from_pyfile(CONFIG_FILE)

    if app.config["DEBUG"]:
        setup_debug()

    # Set up database
    db = SQLAlchemy(app)
    load_models()

    setup_default_routes()
    load_blueprints()

    return app