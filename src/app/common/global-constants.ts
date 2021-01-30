export class GlobalConstants {
    public static dbURL = 'https://3689d2b41408.ngrok.io/';
    public static siteTitle = 'There is the URL for DB API endpoints';
    public static doctorProfile: {
        uid: string,
        cedula: string,
        nombre: string
    };
    public static patientProfile: {
        uid: string,
        nombre: string,
        poliza: string,
        nss: string,
        descripcion: string,
        notificaciones: string
    };
}
