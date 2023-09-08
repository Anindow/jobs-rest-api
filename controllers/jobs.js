
//Get all jobs => /api/v1/jobs
exports.getJobs = (req, res, next) => {
    res.status(200).json({
        success : true,
        middlewareUser : req.user,
        message : "THis route will display all jobs in future"
})
}