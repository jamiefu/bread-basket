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

class Registration(db.Model):
    __tablename__ = "registration"

    id = Column(Integer, primary_key=True, autoincrement=True, nullable=False)
    user_id = Column(Integer, ForeignKey("user.id"), nullable=False)
    event_id = Column(Integer, ForeignKey("event.id"), nullable=False)

    datetime_created = Column(DateTime(timezone=True), nullable=False)

    def serialize(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}