from sqlalchemy import (
    Column,
    Date,
    Integer,
    Text
)
from sqlalchemy.dialects.postgresql import ARRAY
from sqlalchemy.orm import relationship

from server import db

class User(db.Model):
    __tablename__ = "user"

    id = Column(Integer, primary_key=True, autoincrement=True, nullable=False)

    email = Column(Text, nullable=False)
    password = Column(Text, nullable=False)
    first_name = Column(Text, nullable=False)
    last_name = Column(Text, nullable=False)
    dob = Column(Date, nullable=False)

    interests = Column(ARRAY(Text), server_default={})

    events = relationship("Registration", backref="user", lazy=True)

    datetime_created = Column(DateTime(timezone=True))
    datetime_updated = Column(DateTime(timezone=True))

    def serialize(self):
        data = {c.name: getattr(self, c.name) for c in self.__table__.columns}
        data["events"] = [event.event_id for event in self.events]
        return data

