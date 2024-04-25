const User = require('../models/schema');

const ApplyDietitionSubmittion = async (req, res) => {
    try {
        const { formData } = req.body;
        console.log("form" + formData);

        if (!formData) {
            return res.status(400).json({
                success: false,
                message: "Fill all data"
            });
        }

        // Fetch admin users
        const adminUsers = await User.find({ Role: "admin" });
        console.log(adminUsers);

        // Check if the email already exists in any admin's notifications
        for (const admin of adminUsers) {
            console.log(admin.notification);

            // Assuming admin.notification is an array of objects
            for (const notification of admin.notification) {
                if (notification.email === formData.email) {
                    console.log("email" + notification.email);
                    return res.status(501).json({
                        success: false,
                        message: "Your response is already submitted please wait for approval"
                    });
                }
            }
        }

        // Since email was not found in any notifications, proceed to add it
        const savePromises = adminUsers.map(admin => {
            admin.notification.push(formData); 
            return admin.save();
        });

        // Wait for all admin documents to save
        await Promise.all(savePromises);
        console.log(savePromises);

        // Respond success
        return res.status(200).json({
            message: "Your application is submitted successfully",
            success: true,
            data: savePromises.map(promise => promise.notification)
        });

    } catch (error) {
        console.error("Error in Submitting data: ", error);
        return res.status(500).json({
            success: false,
            message: "Error in Submitting data"
        });
    }
};

module.exports = ApplyDietitionSubmittion;
