import { useState, useEffect, FormEvent } from 'react';
import { HiOutlineRefresh } from 'react-icons/hi';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false); // Estado para controlar la carga

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const clearForm = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  useEffect(() => {
    const successTimeout = setTimeout(() => {
      setSuccessMessage('');
    }, 3000);

    const errorTimeout = setTimeout(() => {
      setErrorMessage('');
    }, 3000);

    return () => {
      clearTimeout(successTimeout);
      clearTimeout(errorTimeout);
    };
  }, [successMessage, errorMessage]);

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name) {
      newErrors.name = 'El nombre es requerido';
    }
    if (!formData.email) {
      newErrors.email = 'El correo es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El correo no es válido';
    }
    if (!formData.subject) {
      newErrors.subject = 'El asunto es requerido';
    }
    if (!formData.message) {
      newErrors.message = 'El mensaje es requerido';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
 
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true); // Cambiar el estado a true cuando se inicia el envío
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          setSuccessMessage('¡Tu mensaje ha sido enviado con éxito!');
          clearForm();
        } else {
          setErrorMessage('Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.');
        }
      } catch (error) {
        setErrorMessage('Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.');
      } finally {
        setLoading(false); // Cambiar el estado a false cuando se completa el envío (tanto si tiene éxito como si falla)
      }
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md p-8 rounded-[20px] mb-8">
      <h2 className="text-2xl font-semibold mb-4">Contacto</h2>
      {successMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 mb-4 rounded" role="alert">
          {successMessage}
        </div>
      )}
      {errorMessage && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-4 rounded" role="alert">
          {errorMessage}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Nombre</label>
          <input
            className={`rounded-[20px] appearance-none border-gray-300 w-full py-3 px-4 text-gray-700 outline-none focus:outline-none focus:border-transparent focus:shadow-md focus:ring-transparent ${errors.name && 'border-red-500'}`}
            id="name"
            type="text"
            placeholder="Nombre"
            name="name"
            value={formData.name}
            onChange={handleChange}
            />
          {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Correo</label>
          <input
            className={`rounded-[20px] appearance-none border-gray-300 w-full py-3 px-4 text-gray-700 outline-none focus:outline-none focus:border-transparent focus:shadow-md focus:ring-transparent ${errors.email && 'border-red-500'}`}
            id="email"
            type="email"
            placeholder="Correo"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">Asunto</label>
          <input
            className={`rounded-[20px] appearance-none border-gray-300 w-full py-3 px-4 text-gray-700 outline-none focus:outline-none focus:border-transparent focus:shadow-md focus:ring-transparent ${errors.subject && 'border-red-500'}`}
            id="subject"
            type="text"
            placeholder="Asunto"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
          {errors.subject && <p className="text-red-500 text-xs italic">{errors.subject}</p>}
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Mensaje</label>
          <textarea
            className={`rounded-[20px] appearance-none border-gray-300 w-full py-3 px-4 text-gray-700 outline-none focus:outline-none focus:border-transparent focus:shadow-md focus:ring-transparent ${errors.message && 'border-red-500'}`}
            
            id="message"
            placeholder="Mensaje"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <p className="text-red-500 text-xs italic">{errors.message}</p>}
        </div>
         {/* Botón con indicador de carga */}
         <div className="flex items-center justify-center">
          <button
            className={`bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center ${
              loading ? 'cursor-not-allowed opacity-50' : ''
            }`}
            type="submit"
            disabled={loading}
          >
            {loading && <HiOutlineRefresh className="animate-spin -ml-1 mr-3 h-4 w-4" />} {/* Ícono de carga */}
            {loading ? 'Enviando...' : 'Enviar'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
