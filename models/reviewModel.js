
function ReviewModel(sequelize, DataTypes) {

    const Review = sequelize.define('review', {

        rating: {
            type: DataTypes.INTEGER,
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