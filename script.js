// Question 1: JavaScript Functionality

// Input Data 
const getUserActivityData = () => {
    return [
        { userId: 1, activityType: "login", timestamp: "2024-06-14T10:00:00Z" },
        { userId: 2, activityType: "logout", timestamp: "2024-06-14T10:05:00Z" },
        { userId: 3, activityType: "upload", timestamp: "2024-06-14T10:10:00Z" },
        { userId: 1, activityType: "download", timestamp: "2024-06-14T10:15:00Z" },
        { userId: 4, activityType: "login", timestamp: "2024-06-14T10:20:00Z" },
        { userId: 2, activityType: "upload", timestamp: "2024-06-14T10:25:00Z" },
        { userId: 5, activityType: "download", timestamp: "2024-06-14T10:30:00Z" },
        { userId: 3, activityType: "login", timestamp: "2024-06-14T10:35:00Z" },
        { userId: 4, activityType: "logout", timestamp: "2024-06-14T10:40:00Z" },
        { userId: 5, activityType: "upload", timestamp: "2024-06-14T10:45:00Z" },
    ];
};

/**
 * This function counts the number of unique users
 * @returns number of unique users
 */
const countUniqueUsers = () => {
    const data = getUserActivityData();
    const uniqueUsers = new Set();
    data.forEach((user) => uniqueUsers.add(user.userId));
    return uniqueUsers.size;
};

/**
 * This function finds the most common activity type in timeline data
 * @returns Return the most common activity type
 */
const findMostCommonActivityType = () => {
    const data = getUserActivityData();
    const activityTypeFrequency = {};
    let mostFrequentActivityType = "";
    let maxFrequency = 0;
    data.forEach((user) => {
        if (!activityTypeFrequency[user.activityType]) {
            activityTypeFrequency[user.activityType] = 1;
        } else {
            activityTypeFrequency[user.activityType]++;
        }

        if (activityTypeFrequency[user.activityType] > maxFrequency) {
            maxFrequency = activityTypeFrequency[user.activityType];
            mostFrequentActivityType = user.activityType;
        }
    });
    return mostFrequentActivityType;
};

/**
 * This function extracts the users from timeline data and return their timeline data in sorted form
 * @returns returns the timeline for each user in a sorted manner
 */
const getActivityTimeline = () => {
    const data = getUserActivityData();
    const activityTimeline = {};
    data.forEach((user) => {
        if (!activityTimeline[user.userId]) {
            activityTimeline[user.userId] = [];
        }
        activityTimeline[user.userId].push({
            activityType: user.activityType,
            timestamp: user.timestamp,
        });
    });
    //   Sorting activities of users in descending order, such that latest activity is first
    Object.keys(activityTimeline).forEach((userId) => {
        activityTimeline[userId].sort((a, b) => {
            return new Date(b.timestamp) - new Date(a.timestamp);
        });
    });
    return activityTimeline;
};


// Logging results
console.log('countUniqueUsers:=', countUniqueUsers());
console.log('findMostCommonActivityType:=', findMostCommonActivityType());
console.log('getActivityTimeline:=', getActivityTimeline());
