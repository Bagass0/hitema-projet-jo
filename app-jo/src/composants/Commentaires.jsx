import React, { useState } from 'react';

function Commentaires() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleSubmitComment = () => {
    // Ajouter le nouveau commentaire à la liste des commentaires
    setComments([...comments, newComment]);
    // Effacer le champ de saisie
    setNewComment('');
  };

  return (
    <div>
      <div className="bg-gray-300 mx-auto mt-5 p-6 max-w-2xl rounded-md shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800">Commentaires</h2>
        <div className="mt-10">
          <textarea
            value={newComment}
            onChange={handleCommentChange}
            placeholder="Saisissez votre commentaire"
            className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:border-indigo-500"
          />
          <button
            onClick={handleSubmitComment}
            className="mt-2 w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75"
          >
            Ajouter un commentaire
          </button>
        </div>
      </div>
      <div className="mt-10 space-y-4">
        {comments.map((comment, index) => (
          // Afficher chaque commentaire sans échapper les caractères spéciaux
          <div key={index} className="ml-10 w-1/5 bg-gray-500 p-3 text-gray-700" dangerouslySetInnerHTML={{ __html: comment }} />
        ))}
      </div>
    </div>
  );
}

export default Commentaires;