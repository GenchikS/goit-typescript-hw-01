export enum UserRole {
    admin = 'admin',
    editor = 'editor',
    guest = 'guest',
  }


  // Замініть наступний код на версію за допомогою Record
  type RoleDescription = Record<UserRole, string>
  const RoleDescription = {
    admin: 'admin',
    editor: 'editor',
    guest: 'guest',
  };