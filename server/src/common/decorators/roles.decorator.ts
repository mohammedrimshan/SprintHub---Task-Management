import { SetMetadata } from '@nestjs/common';
import { Role } from '../interfaces/role.enum';

export const Roles = (...roles: Role[]) => SetMetadata('roles', roles);