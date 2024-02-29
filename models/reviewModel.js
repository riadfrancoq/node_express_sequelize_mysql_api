
function ReviewModel(sequelize, DataTypes) {

    const Review = sequelize.define('review', {

        rating: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT

        }

    }, {
        timestamps: false
    });

    return Review;
};

export default ReviewModel;