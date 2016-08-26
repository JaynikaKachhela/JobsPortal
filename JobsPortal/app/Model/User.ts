export class User {
    public Id: string;
    public Name: string;
    public Email: string;
    public PhoneNumber: number;
    public Applicant: Applicant
}
export class Applicant {
    public GitHubUrl: string;
    public Resume: string; 
}