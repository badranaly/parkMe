Name of app: parkMe

MVP: connecting 2 users to exchange parking

Goals: To have a fully functional App that works on both sides for the user.

User stories:
  - User looking for parking:
      - will have a button to find parking
      - App will search DB to search for another user who has set leaving spot to true
      - User will be prompted with a message saying a spot has been found
      - User will be provided with Google maps navigation to available spot
      - User upon having parked will have a button to set his leaving spot value to false
  - User Leaving parking spot:
      - Will have a button to query the DB that he is leaving the spot set to true
      - Will be connected with user looking for parking and wait for othe user to arrive
      - will be provided a map with other users location as they head to the spot
      - will have some kind of reward(TBD) for letting other users know they left the spot.

Technologies: ReactNative on NodeJS

WireFrames: WireFrames Folder.

TimeLine:
  - Day 1: Set up user accounts sign up and login page and setup backend with tables for users
  - Day 2-4: Setup Home page for users logging in providing them with options to either look for parking or leave their spot; try to get one of the buttons to query the backend and change statuses of user and test with second user. Work on the Second button to accomplish the same task.
  - Day 5-6: Find a way to connect both users using the app, have a response on both phones once query invocations have been made and make use of Googles geolocation functionality in Native.

Foreseen Challenges: Mainly connecting both users through querying the DB and then invoking geolocation to connect the closest user looking for parking to the user leaving their spot. Another challenge expected to face is Navigating the user looking for parking to the user who's leaving the spot.

https://github.com/badranaly/parkMe
