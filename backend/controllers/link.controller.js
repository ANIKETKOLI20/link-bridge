import Link from '../models/link.model.js';

// Create a new link
export const createLink = async (req, res) => {
  const { title, url } = req.body;
  const userId = req.user.id;

  if (!title || !url) {
    return res.status(400).json({ error: 'Title and URL are required' });
  }

  try {
    const newLink = new Link({ userId, title, url, order: Date.now() });
    await newLink.save();
    res.status(201).json(newLink);
  } catch (error) {
    console.error('Error creating link:', error);
    res.status(500).json({ error: error.message });
  }
};

// Get all links for a user
export const getLinks = async (req, res) => {
  const userId = req.user.id;
  try {
    const links = await Link.find({ userId }).sort({ order: 1 });
    res.json(links);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a link
export const updateLink = async (req, res) => {
  const { id } = req.params; 
  const { title, url, order } = req.body;

  // Validate input
  if (!id) {
    return res.status(400).json({ error: 'Link ID is required' });
  }

  // Check if at least one field is provided to update
  if (!title && !url && !order) {
    return res.status(400).json({ error: 'At least one field to update is required' });
  }

  try {
    // Perform the update operation
    const updatedLink = await Link.findByIdAndUpdate(
      id,
      { title, url, order },
      { new: true, runValidators: true } 
    );

    // Handle case where link is not found
    if (!updatedLink) {
      return res.status(404).json({ error: 'Link not found' });
    }

    // Send updated link data in response
    res.json(updatedLink);
  } catch (error) {
    console.error('Update link error:', error); // Log error for debugging
    res.status(500).json({ error: error.message });
  }
};

// Delete a link
export const deleteLink = async (req, res) => {
  const { id } = req.params; // Use URL parameter for ID

  if (!id) {
    return res.status(400).json({ error: 'Link ID is required' });
  }

  try {
    const result = await Link.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ error: 'Link not found' });
    }

    res.json({ message: 'Link deleted successfully' });
  } catch (error) {
    console.error('Delete link error:', error); 
    res.status(500).json({ error: error.message });
  }
};
