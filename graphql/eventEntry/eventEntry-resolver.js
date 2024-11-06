// resolvers/eventResolver.js
const Event = require('../../models/event'); // Import the Event model

const eventResolver = {
  Query: {
    events: async () => {
      try {
        return await Event.find(); // Fetch all events
      } catch (error) {
        throw new Error("Failed to fetch events: " + error.message);
      }
    },
    event: async (parent, { id }) => {
      try {
        return await Event.findById(id); // Fetch a single event by ID
      } catch (error) {
        throw new Error("Event not found: " + error.message);
      }
    },
    searchEvents: async (parent, { title }) => {
      try {
        return await Event.find({ title: new RegExp(title, 'i') }); // Search events by title
      } catch (error) {
        throw new Error("Failed to search events: " + error.message);
      }
    },
  },

  Mutation: {
    createEvent: async (parent, { input }) => {
      try {
        const event = new Event(input); // Create new event instance
        await event.save(); // Save event to database
        return event;
      } catch (error) {
        throw new Error("Failed to create event: " + error.message);
      }
    },
    updateEvent: async (parent, { id, input }) => {
      try {
        const event = await Event.findByIdAndUpdate(id, input, { new: true });
        return event;
      } catch (error) {
        throw new Error("Failed to update event: " + error.message);
      }
    },
    deleteEvent: async (parent, { id }) => {
      try {
        const event = await Event.findByIdAndDelete(id);
        return event;
      } catch (error) {
        throw new Error("Failed to delete event: " + error.message);
      }
    },
  },
};

module.exports = eventResolver;
