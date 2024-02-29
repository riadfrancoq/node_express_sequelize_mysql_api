
function ReviewModel(sequelize, DataTypes) {

    const Review = sequelize.define('review', {

        rating: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT

        },

    });

    return Review;
};

export default ReviewModel;