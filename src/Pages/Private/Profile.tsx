export const Profile = () => {
    return (
        <div className="max-w-md mx-auto p-6 bg-gray-600 dark:bg-green-200 shadow-lg rounded-lg">
            <div className="text-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">User Profile</h1>
            </div>
            <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">Profile Information</h2>
                <p className="text-gray-600">
                    <strong className="text-gray-800">Username:</strong> johndoe
                </p>
                <p className="text-gray-600">
                    <strong className="text-gray-800">Email:</strong> johndoe@example.com
                </p>
                <p className="text-gray-600">
                    <strong className="text-gray-800">Password:</strong> ********
                </p>
            </div>
            <div>
                <h2 className="text-xl font-semibold text-gray-700 mb-4">Last Tasks / Projects</h2>
                <ul className="space-y-2">
                    <li className="text-gray-500 italic">No tasks or projects added yet.</li>
                </ul>
            </div>
        </div>
    );
};
