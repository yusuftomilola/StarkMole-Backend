import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength, MaxLength, Matches } from "class-validator"
import { Role } from "../../common/enums/role.enum"

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(30)
  username: string

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(50)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/, {
    message:
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
  })
  password: string

  @IsOptional()
  @IsString()
  role?: Role = Role.PLAYER

  @IsOptional()
  @IsString()
  walletAddress?: string

  readonly isEmailVerified?: boolean;
  readonly emailVerificationToken?: string;
  readonly emailVerificationExpires?: Date;
}
