// @desc    Get vets info
// @route   GET /api/vets
// @access  Public
const getVets = (req, res) => {
    res.status(200).json({message:'Get vets info'})
}

// @desc    Set vet info
// @route   POST /api/vets
// @access  Private
const setVetinfo = (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    res.status(200).json({message:'Set vet info'})
}


// @desc    Update vet info
// @route   PUT /api/vets/:id
// @access  Private
const updateVetinfo = (req, res) => {
    res.status(200).json({message:`Update vet ${req.params.id}`})
}


// @desc    Delete vet info
// @route   DELETE /api/vets:id
// @access  Private
const deleteVetinfo = (req, res) => {
    res.status(200).json({message:`Delete vet ${req.params.id}`})
}



module.exports = {
    getVets,
    setVetinfo,
    updateVetinfo,
    deleteVetinfo
}