import { DomainEvent, type DomainEvents } from "@techmely/domain-driven";
import type { IUserCreatedDE, UserRoles, UserStatus } from "../entities/user.types";
import type { UserMetadata } from "../value-objects/user-metadata.value-object";
import type { UserProvider } from "../value-objects/user-providers.value-object";

export class UserCreatedDomainEvent extends DomainEvent implements IUserCreatedDE {
  email: string;
  unverifiedEmail: string;
  isEmailVerified: boolean;
  nickname: string;
  mobile: string;
  birthday: string;
  name: string;
  avatarUrl: string;
  role: UserRoles;
  status: UserStatus;
  locale?: string;
  gender?: string;
  provider?: UserProvider;
  metadata?: UserMetadata;

  constructor(props: IDomainEvent<UserCreatedDomainEvent>) {
    super(props);
    this.email = props.email;
    this.unverifiedEmail = props.unverifiedEmail;
    this.isEmailVerified = props.isEmailVerified;
    this.nickname = props.nickname;
    this.mobile = props.mobile;
    this.birthday = props.birthday;
    this.name = props.name;
    this.locale = props.locale;
    this.avatarUrl = props.avatarUrl;
    this.gender = props.gender;
    this.provider = props.provider;
    this.role = props.role;
    this.status = props.status;
    this.metadata = props.metadata;
  }
}
