/**
 * @swagger
 * components:
 *   schemas:
 *     Movie:
 *       type: object
 *       required:
 *         - title
 *         - yearReleased
 *         - rating
 *         - genre
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the movie
 *         title:
 *           type: string
 *           description: The title of the movie
 *         rating:
 *           type: number
 *           description: The rating of movie
 *         yearReleased:
 *           type: number
 *           description: The year the movie was released    
 *         genre:
 *           type: string
 *           description: The genre of the movie
 *       example:
 *         title: Animal
 *         yearReleased: 2023
 *         rating: 4
 *         genre: Action
 * tags:
 *   name: Movies
 *   description: The Movies managing API
 * /lobby/movies:
 *   get:
 *     summary: Lists all the Movies
 *     tags: [Movies]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: The list of the Movies
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Movie'
 *   post:
 *     summary: Add new Movie to lobby
 *     tags: [Movies]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Movie'
 *     responses:
 *       200:
 *         description: Movie added to lobby.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Movie'
 *       500:
 *         description: Some server error
 * /lobby/search:
 *   get:
 *     summary: Get the movie by id
 *     tags: [Movies]
 *     parameters:
 *       - in: query
 *         name: q
 *         schema:
 *           type: string
 *         required: true
 *         description: The movie id
 *     responses:
 *       200:
 *         description: The movie response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Movie'
 *       404:
 *         description: The movie was not found
 * /lobby/movies/{id}:
 *   put:
 *    summary: Update the movie by the id
 *    tags: [Movies]
 *    parameters:
 *      - in: header
 *        name: authorization
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The movie id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Movie'
 *    responses:
 *      200:
 *        description: The movie was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Movie'
 *      404:
 *        description: The movie was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the movie by id
 *     tags: [Movies]
 *     parameters:
 *       - in: header
 *         name: authorization
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The movie id
 *
 *     responses:
 *       200:
 *         description: The movie was deleted
 *       404:
 *         description: The movie was not found
 */