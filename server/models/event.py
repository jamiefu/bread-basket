from sqlalchemy import (
    Boolean,
    Column,
    Date,
    ForeignKey,
    Integer,
    Text
)

from sqlalchemy.dialects.postgresql import ARRAY
from sqlalchemy.orm import relationship

class Event(db.Model):
    __tablename__ = "event"

    id = Column(Integer, primary_key=True, autoincrement=True, nullable=False)
    publisher_id = Column(Integer, ForeignKey("user.id"), nullable=False)

    event_name = Column(Text, nullable=False)
    event_datetime = Column(DateTime(timezone=True))
    description = Column(Text)

    targets = Column(ARRAY(Text), server_default={})

    registrants = relationship("Registration", backref="event", lazy=True)

    datetime_created = Column(DateTime(timezone=True))
    datetime_updated = Column(DateTime(timezone=True))

    def serialize(self):
        data = {c.name: getattr(self, c.name) for c in self.__table__.columns}
        data["registrants"] = [registrant.user_id for registrant in self.registrants]
        return data