export class Comment {

	public id: number
	public comment: string;
	public author: string;

	constructor(id: number, comment: string, author: string) {
		this.id = id;
		this.comment = comment;
		this.author = author;
	}
}