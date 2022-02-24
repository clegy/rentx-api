import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteUserUseCase, IRequest } from "./DeleteUserUseCase";

class DeleteUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { logged_user_id } = request;
    const { user_id } = request.params;
    const deleteUserUseCase = container.resolve(DeleteUserUseCase);
    const total = await deleteUserUseCase.execute({
      user_id,
      logged_user_id,
    } as IRequest);
    return response.json({ total });
  }
}
export { DeleteUserController };
